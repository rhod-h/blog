provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "acm"
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "rhodh-terraform-remote-bucket"
    key    = "blog-infra"
    region = "eu-west-2"
  }
}
