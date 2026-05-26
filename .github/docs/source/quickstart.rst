Quick Start Guide
=================
Installation
------------
.. code-block:: bash
   pip install neuralforge
Basic Usage
-----------
Import the library:
.. code-block:: python
   import neuralforge as nf
   import numpy as np
Create a simple neural network:
.. code-block:: python
   # Create a dataset
   X = np.random.randn(1000, 10)
   y = np.random.randn(1000, 1)
   # Create and train model
   model = nf.NeuralNetwork(
       layers=[10, 64, 32, 1],
       activation='relu'
   )
   
   model.fit(X, y, epochs=10, batch_size=32)
   # Make predictions
   predictions = model.predict(X)
Advanced Features
-----------------
Using the Transformer model:
.. code-block:: python
   transformer = nf.Transformer(
       d_model=512,
       nhead=8,
       num_layers=6
   )
   
   # Your training code here
Visualization:
.. code-block:: python
   history = model.training_history
   nf.plot_training_history(history)
