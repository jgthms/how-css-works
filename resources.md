---
layout: page
title: Resources
---

<ul class="list">
  {% for resource in site.resources %}
    <li>
      <em class="list-info">
        {{ resource.domain }}
      </em>
      <p class="list-title">
        <a href="{{ resource.url | prepend: site.baseurl }}">{{ resource.title }}</a>
      </p>
      <p class="list-subtitle">{{ resource.subtitle }}</p>
    </li>
  {% endfor %}
</ul>