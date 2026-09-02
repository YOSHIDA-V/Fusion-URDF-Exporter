"""Fusion Add-In entrypoint for the Robovie-Z URDF/STL exporter."""

from . import URDF_Exporter as exporter


def run(context):
    """Start one Robovie-Z export from Fusion's Add-Ins manager."""
    return exporter.run(context)


def stop(context):
    """Stop the Add-In; the exporter does not keep handlers or UI controls."""
    return None
