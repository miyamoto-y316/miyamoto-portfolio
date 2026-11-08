
FROM node:26-bookworm-slim

# Gitのインストール
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリ
WORKDIR /app

# npmの依存関係をコピー
COPY package*.json ./

# npmパッケージをインストール
RUN npm ci

# プロジェクト全体をコピー
COPY . .

# Next.jsのポート
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
