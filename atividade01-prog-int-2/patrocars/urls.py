from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views


app_name = "patrocars"

""" 
urlpatterns = [
    path("/",views.index, name="index"),
    path("montadora/", views.montadora, name="montadora"),
    path("modelos-veiculos/", views.modelos_veiculos, name="modelos_veiculos"),
    path("veiculos/", views.veiculos, name="veiculos")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) """

urlpatterns = [
    path('montadora/', views.montadora, name='montadora'),
    path('montadoras/', views.lista_montadoras, name='lista_montadoras'),
    path('montadoras/criar/', views.criar_montadora, name='criar_montadora'),
    path('montadoras/editar/<int:pk>/', views.editar_montadora, name='editar_montadora'),
    path('montadoras/excluir/<int:pk>/', views.excluir_montadora, name='excluir_montadora'),

    
    path('modelos/', views.lista_modelos, name='lista_modelos'),
    path('modelos/criar/', views.criar_modelo, name='criar_modelo'),
    path('modelos/editar/<int:pk>/', views.editar_modelo, name='editar_modelo'),
    path('modelos/excluir/<int:pk>/', views.excluir_modelo, name='excluir_modelo'),

   
    path('veiculos/', views.lista_veiculos, name='lista_veiculos'),
    path('veiculos/criar/', views.criar_veiculo, name='criar_veiculo'),
    path('veiculos/editar/<int:pk>/', views.editar_veiculo, name='editar_veiculo'),
    path('veiculos/excluir/<int:pk>/', views.excluir_veiculo, name='excluir_veiculo'),
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
