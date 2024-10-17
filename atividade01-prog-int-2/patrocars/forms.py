from django import forms
from .models import Montadora, ModelosDeVeiculos, Veiculos

class MontadoraForm(forms.ModelForm):
    class Meta:
        model = Montadora
        fields = ['nome', 'pais', 'ano_fundacao']

class ModelosDeVeiculosForm(forms.ModelForm):
    class Meta:
        model = ModelosDeVeiculos
        fields = ['nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']

class VeiculosForm(forms.ModelForm):
    class Meta:
        model = Veiculos
        fields = ['modelo', 'cor', 'ano_fabricacao', 'ano_modelo', 'valor', 'placa', 'vendido']
