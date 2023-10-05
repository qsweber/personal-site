// import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Create a bucket and expose a website index document
new aws.s3.Bucket("www.quinnweber.com", {
    arn: "arn:aws:s3:::www.quinnweber.com",
    bucket: "www.quinnweber.com",
    hostedZoneId: "Z3BJ6K6RIION7M",
    requestPayer: "BucketOwner",
    serverSideEncryptionConfiguration: {
        rule: {
            applyServerSideEncryptionByDefault: {
                sseAlgorithm: "AES256",
            },
        },
    },
    versioning: {
        enabled: true,
    },
    website: {
        errorDocument: "error.html",
        indexDocument: "index.html",
    },
    websiteDomain: "s3-website-us-west-2.amazonaws.com",
    websiteEndpoint: "www.quinnweber.com.s3-website-us-west-2.amazonaws.com",
}, {
    protect: true,
});
