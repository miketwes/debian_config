#!/bin/bash
export CFLAGS='-march=native -O3 -pipe -fstack-protector -Wall'
export CXXFLAGS='-march=native -O3 -pipe -fstack-protector -Wall'
sourcedir="$HOME/.local/src"
mkdir "$sourcedir"

function git-clone() {
	cd "${sourcedir}/$1"
	git pull
}

function compile() {
	git-clone "$1"
	./waf configure "$2"
	./waf build
	sudo ./waf install
}

function install-dependencies() {
	sudo apt-get install -y build-essential git \
		lib{gtk2.0,gtk-3,vte,gtkspell,git2,ctpl}-dev
}

install-dependencies
compile "geany" "--enable-gtk3"
compile "geany-plugins" ""
git-clone "geany-themes"; sudo ./install.sh
