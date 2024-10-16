from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name = "patrocars"
urlpatterns = [
    path("/",views.index, name="index"),
    path("montadora/", views.montadora, name="montadora"),
    path("modelos-veiculos/", views.modelos_veiculos, name="modelos_veiculos"),
    path("veiculos/", views.veiculos, name="veiculos")
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
