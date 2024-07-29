from django.shortcuts import render,redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.models import User,auth
from django.contrib import messages



def index(request):
     return render(request,'homePage.html')
def counter(request):
     text = request.POST['text']
     a = len(text.split())
     return render(request,'counter.html',{'a':a})
def register(request):
    if request.method == 'POST' :
      name= request.POST['name']
      email= request.POST['email']
      password = request.POST['password']
      passw = request.POST['passw']
      if password == passw:
          if User.objects.filter(email = email).exists():
             messages.info(request,'the email is used !')
             return redirect('register')
          elif User.objects.filter(username=name):
              messages.info(request,'the name is used !')
              return redirect('register')
          else :
              user = User.objects.create_user(username=name , email=email, password = password)
              user.save()
              return redirect('login')
      else :
        messages.info(request,'Passwords are not the same !')
        return redirect ('register')

             
    return render(request,'register.html')
def login(request):
    if request.method == 'POST':
        name = request.POST['name']
        password = request.POST['password']
        user = auth.authenticate(username=name , password = password)
        if user is not None:
            return HttpResponseRedirect(f"/yourHome?name={name}")
        else :
            messages.info(request,'either your username or password is wrong !')
        
    return render(request,'login.html')
def yourHome(request):
    user = request.GET.get('name')
    return render(request,'userPage.html',{'name':user})
def quizz(request):
    return render(request,'quizz.html')
# Create your views here.
