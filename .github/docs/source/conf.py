# docs/source/conf.py
import os
import sys
sys.path.insert(0, os.path.abspath('../../src'))
project = 'NeuralForge'
copyright = '2023, Leandro'
author = 'Leandro'
release = '0.1.0'
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.viewcode',
    'sphinx.ext.intersphinx',
    'sphinx.ext.mathjax',
    'sphinx_copybutton',
    'myst_parser',
    'nbsphinx',
]
templates_path = ['_templates']
exclude_patterns = []
html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
html_logo = '_static/logo.png'
html_favicon = '_static/favicon.ico'
html_theme_options = {
    'navigation_depth': 4,
    'collapse_navigation': False,
}
intersphinx_mapping = {
    'python': ('https://docs.python.org/3', None),
    'numpy': ('https://numpy.org/doc/stable/', None),
    'torch': ('https://pytorch.org/docs/stable/', None),
}
