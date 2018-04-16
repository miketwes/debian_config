#!/bin/bash

# Road Rash (1994) (3DO) wine launcher
# Fixes 'Could not find any CD-ROM drive' error
# NOTE: ISO-image may be any valid ISO (e.g. Ubuntu Live-CD :))


# Default configuration (game and image placed in different directories)

#DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"     # path to directory with .iso (location of this script)
#IMG=$DIR/roadrash.iso                                       # path to .iso
#GAME_DIR="$HOME/.wine/drive_c/ElectronicArts/RoadRash"                     # game installation directory
#GAME_EXE="ROADRASH.EXE"                                     # basename of windows game executable


# Alternative configuration #1 (game and image placed in same directory)

# DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# IMG=$DIR/roadrash.iso
# GAME_DIR=$DIR
# GAME_EXE="ROADRASH.EXE"


# Alternative configuration #2 (game and image placed in same directory, but script in other)

GAME_DIR="$HOME/.wine/drive_c/ElectronicArts/RoadRash"
GAME_EXE="ROADRASH.EXE"
DIR=$GAME_DIR
IMG=$DIR/roadrash.iso



_launch() {
    cd $GAME_DIR
    wine $GAME_DIR/$GAME_EXE
}


if [[ `mount | grep "$IMG"` ]] ; then
    _launch
    exit 0
fi

LABEL=`isoinfo -d -i $IMG | grep -Po '(?<=Volume id: ).+'`

DEV=""
get_device() {
    DEV=`gvfs-mount -li | grep -P -A 6 "Volume\([0-9+]\): $LABEL" | grep -Po "(?<=   unix\-device: ').+(?=')"`
}

get_device
if [[ $DEV == "" ]] ; then
    echo 'Execute gnome-disk-image-mounter...'
    #gnome-disk-image-mounter "$IMG"
    sudo mount "$IMG" "$HOME/iso"
    get_device
    if [[ $DEV == "" ]] ; then
        echo 'FAIL'
        exit 1
    else
        echo 'OK'
    fi
fi


echo 'Mount loop device...'
gvfs-mount -m -d "$DEV"

if [[ `mount | grep "$IMG"` == "" ]] ; then
    echo 'FAIL'
    exit 1
else
    echo 'OK'
    _launch
fi


# TODO: unmount
