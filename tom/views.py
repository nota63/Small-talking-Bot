from django.shortcuts import render
import pyttsx3 as py
import time


def home(request):
    return render(request, 'home.html')


def tom(request):
    if request.method == 'POST':
        speech = request.POST.get('speech')
        engine = py.init()
        engine.say(speech)
        time.sleep(0.5)
        engine.runAndWait()
        if speech:
            status="Done.."
            return render(request,'tom.html',{'info':status})
        else:
            status="Not reading.."
            return render(request,'tom.html',{'status':status})
    return render(request, 'tom.html')
