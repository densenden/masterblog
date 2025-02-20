from flask import render_template, Flask, request
import json
import os

app = Flask(__name__)

blog_post = {'title': 'First Post', 'content': 'This is my first post'},


@app.route('/')
def hello_world():
    file_path = 'content/blog_articles.json'  # Correct path to your JSON file
    articles = []
    try:
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                articles = json.load(file)
    except Exception as e:
        print(f"Error loading articles: {e}")

    return render_template('index.html', articles=articles)


@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        # We will fill this in the next step
        pass
    return render_template('add.html')


@app.route('/delete/<int:post_id>')
def delete(post_id):
    file_path = 'content/blog_articles.json'  # Correct path
    try:
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                articles = json.load(file)

            articles = [article for article in articles if article.get('id') != post_id]

            with open(file_path, 'w') as file:
                json.dump(articles, file, indent=4)

    except Exception as e:
        print(f"Error deleting post: {e}")

    return redirect('/')

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True)