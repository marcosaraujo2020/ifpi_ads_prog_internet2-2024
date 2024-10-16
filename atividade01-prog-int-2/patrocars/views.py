from django.shortcuts import render
from django.http import HttpResponse



# Create your views here.
def index(request):
    return HttpResponse("Olá PatroCars")
    
  
def montadora(request):
    """ return HttpResponse("Montadora") """
    return render(request, "patrocars/pages/montadora.html")


def modelos_veiculos(request):
    """ return HttpResponse("Modelos de Veículos") """
    return render(request, "patrocars/pages/modelos-veiculos.html")


def veiculos(request):
    """ return HttpResponse("Veículos") """
    return render(request, "patrocars/pages/veiculos.html")