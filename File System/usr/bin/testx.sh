#!/bin/sh
if [ -z "$(pgrep Xorg)" ]
then startx &amp;
else clear
fi
