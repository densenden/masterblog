import json
import random

file_path = 'content/blog_articles_backup.json'

with open(file_path, 'r') as file:
    articles = json.load(file)

for i, article in enumerate(articles):
    if i % 2 == 0:
        article['likes'] = random.randint(5, 20)
    else:
        article['likes'] = 0

with open(file_path, 'w') as file:
    json.dump(articles, file, indent=4)