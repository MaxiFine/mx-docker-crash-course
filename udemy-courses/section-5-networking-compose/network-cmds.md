## NETWORKING COMMANDS 

- no commands just docker run cmd's
- Run 2 nginx containers within the same network by not specifying the network which docker chose the default dockerO host network for the containers to run and communicate.

# CREATING A NETWORK AND PUTTING CONTAINERS IN THE SAME NEWTWORK FOR COMMUNICATION

- Created a custom network, put 2 containers in the same network for comms
- exec into the container to ping the other container to verify communication
- Action: installed the ping utility in the container before pinging was possible


# CREATING ISOLATED NETWORKS AND HOW TO CONFIGURE THEM TO COMMUICATE WITH EACH OTHER