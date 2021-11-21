# Linux Commands



## Basic Commands

```bash
# download package
sudo apt-get install packge_

# check if the command is installed
command -v [CMD_NAME] 

# echo the given command manual
man [CMD_NAME]

# list directory contents
ls

# display text
echo [STRING]

# go to the directory
cd [path_directory]

# move the source to destination
mv /path/to/source /path/to/destination
# rename file/directory
mv /path/to/old_name.md /path/to/new_name.md

# copy file
cp /path/to/be/copied /path/to/destination
# copy directory
cp - /path/to/be/copied /path/to/destination
```

## Library

```bash
# check if the library is inst
ldconfig -p | grep [libname]
```

## Files

```bash
# counts all the files in the current directory (not recursive)
wc ./*

# Find file with the name xxx.h
find ./ -name xxx.h

# Compress the directory (recursively) or file
tar -czvf xxx.tar.gz /path/to/directory/or/file 
# Extract the file
tar -xvzf xxx.tar.gz

# transfer fusing scp
scp /path/to/file root@IP:/path/to/destination
# transfer folder using scp
scp -r /path/to/folder root@IP:/path/to/destination

# memory leak check using valgrind
valgrind --tool=memcheck --show-reachable=yes --leak-check=full --show-leak-kinds=all --track-origins=yes -s PATH/TO/TEST/FILE 

# give full permissions to directory
# `a` means all users 
# `+` means add the following rights
# `rwx` means Read, Write and eXecute respectively
sudo chmod a+rwx /path/to/file
sudo chmod a+rwx /path/to/directory
```

## Process

```bash
# show all the processes
ps -aux  less
# kill a process with PID
kill [PID_NUMBER]
```

## Security

```bash
systemctl start firewalld
systemctl stop firewalld
systemctl status firewalld

firewall-cmd --permanent --zone=public --list-sources

# adding whitelist
firewall-cmd --permanent --zone=public --add-source=192.250.110.170/22
# adding port range
firewall-cmd --permanent --zone=public --add-port=17000-19000/tcp
# reload is required
firewall-cmd --reload

firewall-cmd --zone=public --list-all
firewall-cmd --list-all-zones
```

## Network

---



```bash
ps -ef \| grep [redis]
# Show the connection status on the given PROT
netstat -antc \| grep [PORT]

ifconfig

# using SSH
ssh root@10.141.29.15
```

# Vim

## recovery a swap file

```bash
# remove the hidden file `.FILE_NAME.swp`
rm -rf ./.FILE_NAME.swp
```

