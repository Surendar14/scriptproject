from django.shortcuts import render


def mathvolume(request):


    context = {}

    if request.method == 'POST':
        radius = int(request.POST.get('value_radius',0))
        height = int(request.POST.get('value_height',0))
        print("radius=",radius)
        print("height=",height)
        c = 3.14156*radius*radius*height
        context['result'] = c
        context['radius'] = radius
        context['height'] = height

    if request.method == 'GET':
        context['result'] = 0
        context['radius'] = 0
        context['height'] = 0

    return render(request,'mathapp/mathvolume.html', context)

def matharea(request):


    context = {}

    if request.method == 'POST':
        radius = int(request.POST.get('value_radius',0))
        print("radius=",radius)
        c = 3.14156*radius*radius
        context['result'] = c
        context['radius'] = radius

    if request.method == 'GET':
        context['result'] = 0
        context['radius'] = 0

    return render(request,'mathapp/matharea.html', context)