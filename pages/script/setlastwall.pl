#!/usr/bin/perl
# set last wallpaper

$userhomefolder = `whoami`;
$currentdisplay = `echo -n \$DISPLAY`;
chomp($userhomefolder);
chomp($currentdisplay);

# print $currentdisplay."\n";

$filename = "/home/".$userhomefolder."/.fluxbox/lastwallpaper";
use IO::File;

$fh = IO::File->new($filename, "r")
 or die "Couldn't open $filename !\n";

while(defined($line = $fh->getline()))
{
        chomp($line);
#       $lastwall = $line if $line =~ /\:0\.0/;
        $lastwall = $line if $line =~ $currentdisplay;
}
$fh->close();

@test1 = split(/\|/, $lastwall);
if    (@test1[0] eq '$full')     { $args = "-f"; }
elsif (@test1[0] eq '$center')   { $args = "-c"; }
elsif (@test1[0] eq '$center $full') { $args = "-C" }
elsif (@test1[0] eq '$aspect')   { $args = "-a"; }
elsif (@test1[0] eq '$aspect $full')   { $args = "-a"; }

print "now restoring last wallpaper\n";
exec("fbsetbg $args '@test1[1]'");
#print "fbsetbg $args @test1[1]\n";
