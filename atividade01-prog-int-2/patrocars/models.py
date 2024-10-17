from django.db import models
import ulid


# Create your models here.
class ULIDField(models.CharField):
    
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 26  
        kwargs['default'] = ulid.new
        kwargs['editable'] = False  
        super().__init__(*args, **kwargs)


class Montadora(models.Model):
    """ id = models.AutoField(primary_key=True) """  
    id = ULIDField(primary_key=True)
    nome = models.CharField(max_length=100)
    pais = models.CharField(max_length=100)
    ano_fundacao = models.IntegerField()

    def __str__(self):
        return self.nome


class ModelosDeVeiculos(models.Model):
    """ id = models.AutoField(primary_key=True) """  
    id = ULIDField(primary_key=True)
    nome = models.CharField(max_length=100)
    montadora = models.ForeignKey(Montadora, on_delete=models.CASCADE)  
    valor_referencia = models.DecimalField(max_digits=10, decimal_places=2)
    motorizacao = models.DecimalField(max_digits=4, decimal_places=2) 
    turbo = models.BooleanField(default=False)
    automatico = models.BooleanField(default=False)

    def __str__(self):
        return self.nome


class Veiculos(models.Model):
    """ id = models.AutoField(primary_key=True) """  
    id = ULIDField(primary_key=True)
    modelo = models.ForeignKey(ModelosDeVeiculos, on_delete=models.CASCADE)  
    cor = models.CharField(max_length=50)
    ano_fabricacao = models.IntegerField()
    ano_modelo = models.IntegerField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    placa = models.CharField(max_length=10, unique=True)  
    vendido = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.modelo.nome} - {self.placa}'
