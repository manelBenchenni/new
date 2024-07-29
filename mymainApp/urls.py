from django.urls import path
from . import views
urlpatterns = [
    path('https://manelbenchenni.github.io/new/', views.index ,name='index'),
    path('/counter',views.counter,name='counter'),
    path('/register',views.register,name='register'),
    path('/login',views.login,name='login'),
    path('/yourHome',views.yourHome,name='yourHome'),
    path('/quizz',views.quizz,name='quizz')
]
