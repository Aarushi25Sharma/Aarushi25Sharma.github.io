#we have to add this on admin panel --------
from django.contrib.admin import ModelAdmin, SimpleListFilter

class ScrapeStatusFilter(SimpleListFilter):
  title = 'Scrape status' # a label for our filter
  parameter_name = 'pages' # you can put anything here

  def lookups(self, request, model_admin):
    # This is where you create filter options; we have two:
    return [
        ('scraped', 'Scraped'),
        ('not_scraped', 'Not scraped'),
    ]

  def queryset(self, request, queryset):
    # This is where you process parameters selected by use via filter options:
    if self.value() == 'scraped':
        # Get websites that have at least one page.
  return queryset.distinct().filter(pages__isnull=False)
    if self.value():
        # Get websites that don't have any pages.
        return queryset.distinct().filter(pages__isnull=True)

       --------------------------------------------------------------------
      # add this filter to website admin
class WebsiteAdmin(AdminViews):
  actions = [scrape_website]

  list_display = ['url']
  search_fields = ['url']
  list_filter = (ScrapeStatusFilter, )
