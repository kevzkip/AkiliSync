from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


@app.route('/')
def home():
    return render_template('index.html')
users = {
    "user@example.com": {"password": "password123"}
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sign-in', methods=['POST'])
def sign_in():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email in users and users[email]['password'] == password:
        
        return jsonify({"success": True})
    else:
        return jsonify({"success": False}), 401  # Unauthorized

@app.route('/dashboard')
def dashboard():
    
    return "Welcome to your dashboard!",render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/learn')
def learn():
    return render_template('learn.html')

@app.route('/assessment')
def assessment():
    return render_template('assessment.html')

@app.route('/submit_assessment', methods=['POST'])
def submit_assessment():
    answers = {
        'q1': request.form.get('q1'),
        'q2': request.form.get('q2'),
    }

    # Check answers and calculate score
    score = 0
    if answers['q1'] == 'a':
        score += 1
    if answers['q2'] == 'b':
        score += 1

    feedback = get_feedback(score)
    return render_template('result.html', score=score, feedback=feedback)

def get_feedback(score):
    if score == 2:
        return "Excellent! You have a great understanding of the basics."
    elif score == 1:
        return "Good job! But there’s still some room for improvement."
    else:
        return "Keep learning! You’ll get there soon."

if __name__ == '__main__':
    app.run(debug=True)
