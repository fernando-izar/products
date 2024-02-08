from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from django.test import TestCase
from .models import ProductCategory
from django.contrib.auth.models import User

class ProductCategoryViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.force_authenticate(user=self.user)

         # Garante que o banco de dados está limpo antes de cada teste
        ProductCategory.objects.all().delete()  # Limpa todas as entradas de ProductCategory

        # Criando algumas categorias de produtos para testar
        ProductCategory.objects.create(name='Categoria 1', discount=5)
        ProductCategory.objects.create(name='Categoria 2', discount=10)

    def test_list_product_category(self):
        # Obtendo a URL da view que queremos testar
        url = reverse('product_category-list')  # Substitua pelo nome real da sua URL
        response = self.client.get(url)

        # Verificando se o status code está correto (200 OK)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Verificando se a quantidade de categorias retornadas está correta
        self.assertEqual(len(response.data), 2)

        # Verificando se os dados retornados estão corretos
        # Aqui, você pode querer verificar os detalhes específicos dos dados retornados para garantir que estão corretos
        self.assertEqual(response.data[0]['name'], 'Categoria 1')
        self.assertEqual(response.data[0]['discount'], '5.00')  # O desconto pode ser retornado como string formatada
        self.assertEqual(response.data[1]['name'], 'Categoria 2')
        self.assertEqual(response.data[1]['discount'], '10.00')

