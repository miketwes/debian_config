from collections import OrderedDict

with open('/home/mike/weblink/txt/vn.txt', 'r') as f:
    l = list(filter(None, (line.rstrip() for line in f))) 

l1 = list(OrderedDict.fromkeys(l))

i = 0
for x in l1:
	if i % 2 == 0:
		print()
	print(x)
	i = i+1
	


