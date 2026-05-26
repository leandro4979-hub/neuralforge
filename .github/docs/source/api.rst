API Reference
=============
Core Module
-----------
.. automodule:: neuralforge.core
   :members:
   :undoc-members:
   :show-inheritance:
Models
~~~~~~
.. autoclass:: neuralforge.core.models.NeuralNetwork
   :members:
   :special-members: __init__
.. autoclass:: neuralforge.core.models.Transformer
   :members:
   :special-members: __init__
Layers
~~~~~~
.. autoclass:: neuralforge.core.layers.DenseLayer
   :members:
   :special-members: __init__
.. autoclass:: neuralforge.core.layers.AttentionLayer
   :members:
   :special-members: __init__
Utils Module
------------
.. automodule:: neuralforge.utils
   :members:
   :undoc-members:
   :show-inheritance:
Data Loading
~~~~~~~~~~~~
.. autofunction:: neuralforge.utils.data_loader.load_dataset
.. autofunction:: neuralforge.utils.data_loader.preprocess_data
Visualization
~~~~~~~~~~~~~
.. autofunction:: neuralforge.utils.visualization.plot_training_history
.. autofunction:: neuralforge.utils.visualization.plot_confusion_matrix
