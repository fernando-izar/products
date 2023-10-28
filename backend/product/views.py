from rest_framework.views import APIView
from rest_framework.response import Response


class ProductView(APIView):
    def get(self, request):
        return Response({"foo": "bar"})
