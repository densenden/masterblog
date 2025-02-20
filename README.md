# Studio Sen Blog

Studio Sen Blog is a web application that allows users to create, update, and delete blog posts. The application is built using Python and JavaScript, with Flask as the web framework.

## Features

- Create new blog posts
- Update existing blog posts
- Delete blog posts
- Toggle between day and night modes
- Manage keywords for blog posts

## Technologies Used

- Python
- Flask
- JavaScript
- HTML
- CSS

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/densenden/studio-sen-blog.git
    ```
2. Navigate to the project directory:
    ```sh
    cd studio-sen-blog
    ```
3. Create a virtual environment:
    ```sh
    python3 -m venv venv
    ```
4. Activate the virtual environment:
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```
    - On Windows:
        ```sh
        venv\Scripts\activate
        ```
5. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

## Usage

1. Run the Flask application:
    ```sh
    flask run
    ```
2. Open your web browser and navigate to `http://127.0.0.1:5000`.

## File Structure

- `app.py`: Main application file
- `templates/`: HTML templates
- `static/`: Static files (CSS, JavaScript, images)
- `static/style.css`: Main stylesheet
- `static/add.js`: JavaScript for managing UI interactions
- `static/header.html`: Header HTML file
- `static/footer.html`: Footer HTML file

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
