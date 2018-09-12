<?php
echo $news_item['text'];
?>
<p>
<a href="/news/delete/<?php echo $news_item['slug']; ?>" class="delete">Delete</a>
</p>
<p>
<a href="/news">Return to list of articles</a>
</p>