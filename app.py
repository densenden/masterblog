from flask import render_template, Flask, request, redirect
import json
import os
import shutil



def reset_blog_articles():
    backup_file = 'content/blog_articles_backup.json'
    main_file = 'content/blog_articles.json'

    if os.path.exists(backup_file):
        shutil.copy(backup_file, main_file)
    else:
        print(f"Backup blog articles file {backup_file} does not exist.")


app = Flask(__name__)
file_path = 'content/blog_articles.json'

def fetch_post_by_id(post_id):
    try:
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                articles = json.load(file)
                return next((article for article in articles if article.get('id') == post_id), None)
    except Exception as e:
        print(f"Error fetching post: {e}")
        return None



@app.route('/')
def hello_world():
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

@app.route('/update/<int:post_id>', methods=['GET', 'POST'])
def update(post_id):
    if request.method == 'POST':
        try:
            with open(file_path, 'r') as file:
                articles = json.load(file)
            print(f"Loaded articles: {articles}")

            for article in articles:
                if article.get('id') == post_id:
                    article['title'] = request.form['title']
                    article['content'] = request.form['content']
                    article['short_version'] = request.form['short_version']
                    article['author'] = request.form['author']
                    print(f"Updated article: {article}")
                    break

            with open(file_path, 'w') as file:
                json.dump(articles, file, indent=4)
            print(f"Saved updated articles: {articles}")

            return redirect('/')

        except Exception as e:
            print(f"Error updating post: {e}")
            return "Error updating post", 500

    post = fetch_post_by_id(post_id)
    if post is None:
        return "Post not found", 404

    return render_template('update.html', post=post)



@app.route('/article/<int:post_id>')
def view_article(post_id):
    post = fetch_post_by_id(post_id)
    if post is None:
        return "Post not found", 404
    return render_template('article.html', post=post)

def main():
    reset_blog_articles()
    app.run(host="0.0.0.0", port=5000, debug=True)



if __name__ == '__main__':
    main()