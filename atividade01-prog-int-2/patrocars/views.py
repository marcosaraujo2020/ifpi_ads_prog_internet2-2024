""" from django.http import HttpResponse """
from django.shortcuts import render, get_object_or_404, redirect
from .models import Montadora, ModelosDeVeiculos, Veiculos
from .forms import MontadoraForm, ModelosDeVeiculosForm, VeiculosForm

# Create your views here.
def lista_montadoras(request):
    montadoras = Montadora.objects.all()
    return render(request, 'patrocars/montadoras/lista_montadoras.html', {'montadoras': montadoras})


def criar_montadora(request):
    if request.method == 'POST':
        form = MontadoraForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_montadoras')
    else:
        form = MontadoraForm()
    return render(request, 'patrocars/montadoras/criar_montadora.html', {'form': form})


def editar_montadora(request, pk):
    montadora = get_object_or_404(Montadora, pk=pk)
    if request.method == 'POST':
        form = MontadoraForm(request.POST, instance=montadora)
        if form.is_valid():
            form.save()
            return redirect('lista_montadoras')
    else:
        form = MontadoraForm(instance=montadora)
    return render(request, 'patrocars/montadoras/editar_montadora.html', {'form': form})


def excluir_montadora(request, pk):
    montadora = get_object_or_404(Montadora, pk=pk)
    if request.method == 'POST':
        montadora.delete()
        return redirect('lista_montadoras')
    return render(request, 'patrocars/montadoras/excluir_montadora.html', {'montadora': montadora})



def lista_modelos(request):
    modelos = ModelosDeVeiculos.objects.all()
    return render(request, 'patrocars/modelos/lista_modelos.html', {'modelos': modelos})


def criar_modelo(request):
    if request.method == 'POST':
        form = ModelosDeVeiculosForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_modelos')
    else:
        form = ModelosDeVeiculosForm()
    return render(request, 'patrocars/modelos/criar_modelo.html', {'form': form})


def editar_modelo(request, pk):
    modelo = get_object_or_404(ModelosDeVeiculos, pk=pk)
    if request.method == 'POST':
        form = ModelosDeVeiculosForm(request.POST, instance=modelo)
        if form.is_valid():
            form.save()
            return redirect('lista_modelos')
    else:
        form = ModelosDeVeiculosForm(instance=modelo)
    return render(request, 'patrocars/modelos/editar_modelo.html', {'form': form})


def excluir_modelo(request, pk):
    modelo = get_object_or_404(ModelosDeVeiculos, pk=pk)
    if request.method == 'POST':
        modelo.delete()
        return redirect('lista_modelos')
    return render(request, 'patrocars/modelos/excluir_modelo.html', {'modelo': modelo})



def lista_veiculos(request):
    veiculos = Veiculos.objects.all()
    return render(request, 'patrocars/veiculos/lista_veiculos.html', {'veiculos': veiculos})


def criar_veiculo(request):
    if request.method == 'POST':
        form = VeiculosForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_veiculos')
    else:
        form = VeiculosForm()
    return render(request, 'patrocars/veiculos/criar_veiculo.html', {'form': form})


def editar_veiculo(request, pk):
    veiculo = get_object_or_404(Veiculos, pk=pk)
    if request.method == 'POST':
        form = VeiculosForm(request.POST, instance=veiculo)
        if form.is_valid():
            form.save()
            return redirect('lista_veiculos')
    else:
        form = VeiculosForm(instance=veiculo)
    return render(request, 'patrocars/veiculos/editar_veiculo.html', {'form': form})


def excluir_veiculo(request, pk):
    veiculo = get_object_or_404(Veiculos, pk=pk)
    if request.method == 'POST':
        veiculo.delete()
        return redirect('lista_veiculos')
    return render(request, 'patrocars/veiculos/excluir_veiculo.html', {'veiculo': veiculo})


def montadora(request):
    return render(request, "patrocars/pages/montadora.html")

"""
def index(request):
    return HttpResponse("Olá PatroCars")
    
  
def montadora(request):
    return HttpResponse("Montadora")
    return render(request, "patrocars/pages/montadora.html")


def modelos_veiculos(request):
    return HttpResponse("Modelos de Veículos")
    return render(request, "patrocars/pages/modelos-veiculos.html")


def veiculos(request):
    return HttpResponse("Veículos")
    return render(request, "patrocars/pages/veiculos.html")
"""