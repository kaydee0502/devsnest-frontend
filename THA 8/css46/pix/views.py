from django.shortcuts import render
from django.http import HttpResponse
from django.template.defaulttags import register

# Create your views here.
def index(request):
    return render(request,'index.html')

@register.filter
def get_range(value):
    return range(value)


@register.filter
def whites(any):
    return [47, 48, 49, 50, 51, 66, 67, 68, 69, 70, 71, 72, 85, 86, 92, 93, 104, 105, 113, 114, 123, 124, 134, 135, 143, 144, 154, 155, 163, 164, 168, 169, 170, 174, 175, 183, 184, 187, 188, 189, 190, 191, 194, 195, 204, 206, 207, 211, 212, 214, 224, 225, 226, 232, 233, 234, 245, 246, 252, 253, 266, 267, 268, 269, 270, 271, 272, 288, 289, 290, 308, 309, 310, 328, 329, 330, 348, 349, 350]