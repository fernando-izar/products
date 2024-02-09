from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from .models import Product
from product_category.models import ProductCategory
from django.contrib.auth.models import User
import logging

class ProductTests(TestCase):
    def setUp(self):
        # Configurando o cliente de teste
        self.client = APIClient()


        # Criando um usuário de teste e autenticando o cliente de teste
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.force_authenticate(user=self.user)

         # Criando uma instância de ProductCategory
        self.product_category = ProductCategory.objects.create(name='Test Category', discount=10.00)

        # Dados do produto para teste
        self.product_data = {
            'name': 'Test Product',
            'description': 'Test Description',
            'color': 'Test Color',
            'product_category': self.product_category,
            'price': 100.00,
        }

         # Criando um produto para os testes
        self.product = Product.objects.create(**self.product_data)

    def test_create_product(self):
        # Fazendo uma requisição POST para criar um produto
        product_data = self.product_data.copy()
        product_data['product_category'] = self.product_category.id
        response = self.client.post(reverse('product-list'), product_data, format='json',)

        # Verificando se o produto foi criado com sucesso
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_product(self):
        # Fazendo uma requisição GET para obter o produto
        response = self.client.get(reverse('product-detail', kwargs={'pk': self.product.id}), format='json')

        # Verificando se o produto foi obtido com sucesso
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, self.product)

    def test_update_product(self):
        # Dados para atualizar o produto
        change_product = self.product_data.copy()
        change_product['name'] = 'New Product'
        change_product['product_category'] = self.product_category.id
        change_product['price'] = 200.00

        # Fazendo uma requisição PUT para atualizar o produto
        response = self.client.put(reverse('product-detail', kwargs={'pk': self.product.id}), change_product, format='json')

        # Verificando se o produto foi atualizado com sucesso
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_product(self):
        # Fazendo uma requisição DELETE para deletar o produto
        response = self.client.delete(reverse('product-detail', kwargs={'pk': self.product.id}), format='json', follow=True)

        # Verificando se o produto foi deletado com sucesso
        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)