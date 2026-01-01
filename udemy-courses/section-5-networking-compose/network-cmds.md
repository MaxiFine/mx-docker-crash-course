## NETWORKING COMMANDS 

- no commands just docker run cmd's
- Run 2 nginx containers within the same network by not specifying the network which docker chose the default dockerO host network for the containers to run and communicate.

# CREATING A NETWORK AND PUTTING CONTAINERS IN THE SAME NEWTWORK FOR COMMUNICATION

- Created a custom network, put 2 containers in the same network for comms
- exec into the container to ping the other container to verify communication. **exec cmd:  docker exec -it f65be46dbbc5 /bin/bash**
- Action: installed the ping utility in the container before pinging was possible.
**utility installation cmd:  apt-get install iputil-ping -y**

# Why Using Ports

- networks are isolated and can't comm with internet, but the host have assess to the internet, so this way a port is openned so that throught the host/default bridge, the container can assess the internet through the open port by the host.

# CREATING ISOLATED NETWORKS AND HOW TO CONFIGURE THEM TO COMMUICATE WITH EACH OTHER

- Created 2 networks and 2 containers each in a separate network, tried pinging but it didn't work which means separate custom networks cannot communicate unless configured to do so unlike the default network.

# DOCKER COMPOSE

- Can be used to manage multi-containers docker apps in one file
- Run the apps with one one command
- makes runing complex docker setups easy
