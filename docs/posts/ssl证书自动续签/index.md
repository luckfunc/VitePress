## 证书自动续签（使用 acme.sh）

### ✅ 1. 安装 acme.sh

```bash
# 推荐（海外服务器）
curl https://get.acme.sh | sh -s email=your@email.com

# 或者使用 wget
wget -O - https://get.acme.sh | sh -s email=your@email.com
```

安装完成后，acme.sh 的脚本的路径会在：

```bash
/root/.acme.sh/acme.sh
```

> 可以通过别名的方式快速访问到acme.sh脚本
>
> ```bash
> alias acme.sh='/root/.acme.sh/acme.sh'
> ```
>
> 这样可以全局直接使用 `acme.sh` 命令。

---

### ✅ 2. 当前使用泛域名证书的域名

| 域名                | 类型   | 使用证书路径                           |
| ----------------- | ---- | -------------------------------- |
| const.site        | 泛域证书 | `/ssl/const.site/const.site.pem` |
| json.const.site   | 泛域证书 | `/ssl/const.site/const.site.pem` |
| base64.const.site | 泛域证书 | `/ssl/const.site/const.site.pem` |

---

### ✅ 3. 申请 const.site 泛域名证书流程

#### 方式一：自动 DNS 验证（推荐）

推荐使用 `dns_ali` 自动 DNS 验证。这样 acme.sh 可以在续签时自动添加和删除 `_acme-challenge` TXT 记录，不需要每次手动去控制台复制粘贴。

1. 登录 [RAM 访问控制面板](https://ram.console.aliyun.com/users)，创建一个专门给 acme.sh 使用的 RAM 用户并生成 AccessKey。
2. 给这个 RAM 用户绑定 DNS 最小权限策略，至少需要允许下面 3 个操作：

```json
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "alidns:DescribeDomainRecords",
        "alidns:AddDomainRecord",
        "alidns:DeleteDomainRecord"
      ],
      "Resource": [
        "acs:alidns::<你的阿里云主账号ID>:domain/const.site"
      ]
    }
  ]
}
```

如果有多个域名，就在 `Resource` 里继续追加对应域名的 ARN。

3. 在服务器里设置 AccessKey：

```bash
export Ali_Key="你的 Aliyun AccessKeyId"
export Ali_Secret="你的 Aliyun AccessKeySecret"
```

4. 申请泛域名证书：

```bash
acme.sh --issue --dns dns_ali -d '*.const.site' -d const.site
```

> 如果执行时报 `Forbidden.RAM`，一般不是 acme.sh 命令写错了，而是这个 AccessKey 所属的 RAM 用户没有 DNS API 权限。

#### 方式二：手动 DNS 验证（兜底）

手动 DNS 验证只能作为临时兜底方案，比如暂时没有配置 RAM 权限，或者当前 DNS 服务商没有可用 API。

如果 `dns_ali` 执行失败，优先检查 RAM AccessKey 是否有对应的 `alidns` 权限，不要直接切回手动模式。

```bash
acme.sh --issue -d '*.const.site' -d const.site \
  --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please
```

> 📌 根据提示添加 2 条 TXT 记录到 `_acme-challenge.const.site`，**添加完之后确定txt记录已经生效：**
>
> ```bash
> dig TXT _acme-challenge.const.site +short
> ```
>
> 如果能看到刚才添加的值再执行下面的命令，否则建议稍等 1～2 分钟再试。

```bash
# 手动 DNS 验证模式的强确认参数，表示我知道还需要继续手动处理 TXT 记录
acme.sh --renew -d '*.const.site' \
  --yes-I-know-dns-manual-mode-enough-go-ahead-please
```

---

### ✅ 4. 安装证书到指定目录

```bash
# 新建路径保存当前域名的证书文件
mkdir -p /ssl/const.site

# 将证书拷贝到刚才保存的证书目录，方便管理
acme.sh --install-cert -d '*.const.site' \
  --key-file /ssl/const.site/const.site.key \
  --fullchain-file /ssl/const.site/const.site.pem \
  --reloadcmd "nginx -s reload"
```

---

### ✅ 5. 配置 Nginx 并重启使证书生效

所有子域名配置中以下路径：

```nginx
ssl_certificate     /ssl/const.site/const.site.pem;
ssl_certificate_key /ssl/const.site/const.site.key;
```

示例：`json.const.site`

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name json.const.site;

    ssl_certificate     /ssl/const.site/const.site.pem;
    ssl_certificate_key /ssl/const.site/const.site.key;

    location / {
        root /www/wwwroot/json.const.site;
        index index.html index.htm;
    }
}
```

配置完成后，执行命令重载 Nginx 

```bash
nginx -t && nginx -s reload
```
---

### ✅ 6. 自动续签说明（acme.sh 定时任务机制）
acme.sh 安装时会自动将定时任务写入 crontab，每天检查是否需要续签证书。

```bash
crontab -e
```

添加如下行（如果安装时未自动加上）：

```bash
0 3 * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null
```
手动触发续签检查（排查或想立即检查续签状态时使用）：

```bash
acme.sh --cron --home /root/.acme.sh
```

> ⚠️ 注意：cron 只能自动触发 acme.sh。真正做到无人值守续签，还需要证书本身使用 `dns_ali` 这类自动 DNS 验证方式，并且 RAM AccessKey 有添加、查询、删除 TXT 记录的权限。手动 DNS 验证模式不会自动帮你去控制台添加 TXT 记录。

### ✅ 7. 如后续添加新的子域

1. DNS 添加 A 记录指向服务器；
2. 创建目录 `/www/wwwroot/xxx.const.site`；
3. 拷贝一份 `.conf` 文件，修改 `server_name` 和 `root`；
4. 重载 nginx：

```bash
nginx -t && nginx -s reload
```

---
