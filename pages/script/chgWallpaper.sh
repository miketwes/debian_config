#!/bin/bash
export DISPLAY=:0.0
fbsetbg -C /home/mike/t/3/$(ls /home/mike/t/3/ | sort -R | tail -1)
