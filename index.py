from reverso_context_api import Client
from flask import Flask,request
app = Flask(__name__)


@app.route('/api', methods=['GET'])
def home():
    return '<h1>Zed Reverso Context</h1><p>This site is a simple API for Context translation .. created By Createch DZ check us on Facebook <a href="https://www.facebook.com/thecreatechdz">Createch DZ</a>.</p>'

@app.route('/api/translate', methods=['GET'])
def translate():
    query_parameters = request.args

    _word = query_parameters.get('word')
    _from = query_parameters.get('from')
    _to = query_parameters.get('to')
    client = Client(_from, _to)
    if not (_word or _from or _to):
     return "null"

    return list(client.get_translations(_word))

@app.route('/api/spell', methods=['GET'])
def spell():
    query_parameters = request.args

    _word = query_parameters.get('word')
    _from = query_parameters.get('from')
    _to = query_parameters.get('to')
    client = Client(_from, _to)
    if not (_word or _from or _to):
     return "null"

    return list(client.get_search_suggestions(_word))

@app.route('/api/examples', methods=['GET'])
def examples():
    query_parameters = request.args

    _word = query_parameters.get('word')
    _from = query_parameters.get('from')
    _to = query_parameters.get('to')
    client = Client(_from, _to)
    if not (_word or _from or _to):
     return "null"

    return list(client.get_translation_samples(_word, cleanup=True))
       
app.run()



