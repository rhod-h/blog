module "aws-s3-website" {
  source = "github.com/rhod-h/terraform-modules/aws-s3-website"

  project_key    = var.project_key
  s3_bucket_name = var.s3_bucket_name
  hosted_zone    = var.hosted_zone
  domain         = var.domain
  subdomain      = var.subdomain

  providers = {
    aws.acm = aws.acm
  }
}
