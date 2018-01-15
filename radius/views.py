from django.http.response import HttpResponse
from django.template import loader

def radius(request):
	template = loader.get_template('radius/radius.html')
	output = template.render()
	return HttpResponse(output)