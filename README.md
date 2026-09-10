# Najumi Storage Migration Tool

An automated cloud migration tool designed to transfer buckets and objects from third-party S3-compatible providers (such as **AWS S3**, **Cloudflare R2**, **Wasabi**, or **Supabase Storage**) directly into **Najumi Storage** with zero downtime.

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone [https://github.com/najumitech/najumi-storage-migration-tool.git](https://github.com/najumitech/najumi-storage-migration-tool.git)
cd najumi-storage-migration-tool

2. Install Dependencies

npm install

3. Configure Environment Variables

​Copy .env.example to .env and fill in your destination Najumi credentials along with your source cloud provider credentials:
NAJUMI_BASE_URL=[https://storage-api.najumitech.com](https://storage-api.najumitech.com)
NAJUMI_BUCKET_ID=njs_bucket_xxxxx
NAJUMI_ACCESS_KEY=your_najumi_access_key
NAJUMI_SECRET_KEY=your_najumi_secret_key

SOURCE_PROVIDER=aws-s3
SOURCE_BUCKET_NAME=my-legacy-bucket
SOURCE_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
SOURCE_ACCESS_KEY=your_source_access_key
SOURCE_SECRET_KEY=your_source_secret_key

4. Run the Migration Script

npm start

🛡️ Security & Encryption Policy

​Third-party credentials are protected with End-to-End Zero-Knowledge Encryption (AES-256-GCM) in transit and at rest during the migration handshake.

​📄 License

​This project is licensed under the MIT License - see the LICENSE file for details.
​<p align="center">
Built with precision by <a href="https://najumitech.com">Najumi Tech Ltd</a>.
</p>
