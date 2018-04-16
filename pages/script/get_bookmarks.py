import sys
import os
import json
import io
 
 
bookmark_file = '/home/mike/bookmarks-2018-03-23.json'
fp_data = io.open(bookmark_file, encoding='utf-8')
jdata = json.load(fp_data)
fp_data.close()

 
def grab_keys(bookmarks_data, bookmarks_list=[]):
  if 'children' in bookmarks_data:
    for item in bookmarks_data['children']:
      bookmarks_list.append({'title': item.get('title', 'No title'),
                             'uri': item.get('uri', 'None')})
      grab_keys(item, bookmarks_list)
  return bookmarks_list
 
 
def main():
  mydata=grab_keys(jdata)
  for item in mydata:
    myurl = item['uri']
    #if myurl.startswith('http') or myurl.startswith('ftp'):
    print (item['title'], "\n", item['uri'])
    print ("\n\n")
 
if __name__=="__main__":
  main()
