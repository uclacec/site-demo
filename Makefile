# UCLA CEC Site Demo
# Makefile


EC2_ID  = "ec2-54-67-8-121.us-west-1.compute.amazonaws.com"
KEYFILE = "~/.ssh/ian_aws_keypair.pem"


# ssh into AWS EC2 instance
ssh: 
	@ssh -i $(KEYFILE) ubuntu@$(EC2_ID)