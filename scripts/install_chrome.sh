#!/bin/bash
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
wget https://dl.google.com/linux/direct/google-chrome-beta_current_amd64.deb
sudo dpkg -i google-chrome-beta_current_amd64.deb
sudo apt -f install
sudo dpkg -i google-chrome-beta_current_amd64.deb