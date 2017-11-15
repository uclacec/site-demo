# UCLA CEC Site Demo
# Makefile


EC2_ID  = "ec2-52-53-224-70.us-west-1.compute.amazonaws.com"
KEYFILE = "~/.ssh/ian_aws_keypair.pem"


# ssh into AWS EC2 instance
ssh: 
	@ssh -i $(KEYFILE) ubuntu@$(EC2_ID)