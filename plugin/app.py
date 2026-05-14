from flask import Flask, request, jsonify

import tweetnlp

app = Flask(__name__)
model = tweetnlp.Classifier("cardiffnlp/twitter-roberta-base-hate-latest")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        text = data['text']

        prediction = model.predict(text)

        return jsonify({'label': prediction['label']})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
