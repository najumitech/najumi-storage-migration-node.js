import { NajumiStorage } from '@najumi/storage';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Najumi Storage Client (Destination)
const storage = new NajumiStorage({
  baseUrl: process.env.NAJUMI_BASE_URL || 'https://storage-api.najumitech.com',
  bucketId: process.env.NAJUMI_BUCKET_ID,
  accessKey: process.env.NAJUMI_ACCESS_KEY,
  secretKey: process.env.NAJUMI_SECRET_KEY,
});

async function runMigration() {
  try {
    console.log("Initializing Najumi Storage Cloud Migration pipeline...");

    const sourceConfig = {
      provider: process.env.SOURCE_PROVIDER,       // e.g., 'aws-s3', 'cloudflare-r2'
      bucket: process.env.SOURCE_BUCKET_NAME,      // e.g., 'my-legacy-bucket'
      endpoint: process.env.SOURCE_ENDPOINT,       // Optional for AWS, required for R2/custom S3
      accessKey: process.env.SOURCE_ACCESS_KEY,
      secretKey: process.env.SOURCE_SECRET_KEY
    };

    console.log(`Connecting to source provider (${sourceConfig.provider}) for bucket: ${sourceConfig.bucket}...`);

    // Trigger migration job using Najumi SDK migration engine
    const migrationJob = await storage.startMigration(sourceConfig);

    console.log("Migration job successfully initialized!");
    console.log("Job Details:", migrationJob);
    console.log(`Job ID: ${migrationJob.jobId || 'N/A'}`);

  } catch (error) {
    console.error("Migration failed with error:", error.message);
  }
}

runMigration();

