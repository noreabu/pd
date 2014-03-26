#!/bin/bash

check_process() {
  echo "$ts: checking $1"
  [ "$1" = "" ]  && return 0
  [ `pgrep -n $1` ] && return 1 || return 0
}

check_process "jackd"
[ $? -eq 1 ] && `sudo killall jackd`

/usr/bin/jackd -p 128 -R -P 60 -T -d alsa -n 2 -r 0 -p 256 -r 48000 -P hw:Pro -C hw:Pro,1 & pactl load-module module-jack-sink channels=2; pactl load-module module-jack-source channels=2;pacmd set-default-sink jack_out;
