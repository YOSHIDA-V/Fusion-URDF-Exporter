"""Fusion Script entrypoint for the Robovie-Z URDF/STL exporter."""

from . import URDF_Exporter as exporter


def run(context):
    """Run one export and identify this Script as the selected entrypoint."""
    return exporter.run(context, entrypoint_file=__file__)
