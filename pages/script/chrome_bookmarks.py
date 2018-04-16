import re

bookmarks = '/home/mike/bookmark/txt/bookmarks_t.html'
file = open(bookmarks, 'r')
content = file.read()
file.close()
match = re.findall(r'A HREF="(.*?)".*>(.*)</A>', content)

if match:
    for link, title in match:
        print ('        <dt>'+title+'</dt>\n        <dd><a href="'+link+'">\n        '+link+"</a></dd>")
