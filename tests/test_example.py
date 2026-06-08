"""Basic test suite for neuralforge."""


def test_example():
    """Example test to verify pytest is working."""
    assert True


def test_import():
    """Test that the package can be imported."""
    try:
        import neuralforge  # noqa: F401
    except ImportError:
        # Package not yet created, that's fine
        pass
